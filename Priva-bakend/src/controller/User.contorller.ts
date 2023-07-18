import db from "../Database";
import { decode, encode } from "../Util/JWT";
import { pass_decode } from "../Util/password";
//all users owner get is customers
//and super admin get all users excepts superAdmins
export const get_all_user = async (token: string) => {
  const data = decode(token);
  const user = await db.user.findUnique({
    where: {
      id: data.id,
    },
  });
  if (!user) return new Error("User not found");
  if (user.role == "customers") return new Error("You not write to do this");
  if (user.role == "super_admin")
    return db.user.findMany({
      where: {
        role: {
          notIn: "super_admin",
        },
      },
    });
  if (user.role == "owners")
    return db.user.findMany({
      where: {
        role: {
          equals: "customers",
        },
        Charging_history: {
          Charging_station: {
            owner: {
              id: data.id,
            },
          },
        },
      },
    });
};
//get all stations
//Only super admin do this
export const get_all_station = async (token: string) => {
  let data = decode(token);
  const user = await db.user.findUnique({
    where: {
      id: data.id,
    },
  });
  if (!user) return new Error("user not found");
  if (user.role !== "super_admin")
    return new Error("you not write for do this");
  return db.charging_station.findMany();
};
//create customer
export const create_customer = async (data: any) => {
  return db.user.create({
    // ...data,
    data: {
      role: "customers",
      password: data.email,
      ...data,
    },
  });
};
//create owner
export const create_owner = async (token: string, data: any) => {
  const admin = decode(token);
  const user = await db.user.findUnique({
    where: {
      id: admin.id,
    },
  });
  if (!user) return new Error("User not found");
  if (user.role !== "super_admin") return new Error("Your not admin");
  return db.user.create({
    data: {
      ...data,
      role: "owners",
      Charging_station: {
        create: {
          ...data.station,
        },
      },
    },
  });
};
//create admin
export const create_admin = async (token: string, data: any) => {
  const admin = decode(token);
  const user = await db.user.findUnique({
    where: {
      id: admin.id,
    },
  });
  if (!user) return new Error("User not found");
  if (user.role !== "super_admin") return new Error("Your not admin");
  return db.user.create({
    data: {
      role: "super_admin",
      ...data,
    },
  });
};

//crate history
//send data when all task done
//when show than you message on frontend
export const create_history = async (token: string, data: any) => {
  const id = decode(token);
  const user = await db.user.findUnique({
    where: {
      id: id.id,
    },
  });
  if (!user) return new Error("User not found");
  if (user.role !== "customers")
    return new Error("Please make customers account and try again");
  const history = await db.charging_history.create({
    data: {
      ...data.history,
      Charging_station: {
        connect: {
          id: data.station.id,
        },
      },
    },
  });
  return db.user.update({
    where: user,
    data: {
      Charging_history: {
        connect: {
          id: history.id,
        },
      },
    },
  });
};

//login owner and admin
export const login_user = async (data: { email: string; password: string }) => {
  const user = await db.user.findUnique({
    where: {
      email: data.email,
    },
  });
  if (!user) return new Error("email id not found");
  const pp = await pass_decode(data.password, user.password);
  if (!pp) return new Error("Password not correct");
  return user;
};

//login customers
export const login_cus = async (data: { mobile_number: string }) => {
  const user = await db.user.findUnique({
    where: {
      mobile_number: data.mobile_number,
    },
    include: {
      Charging_history: {
        include: {
          Charging_station: true,
        },
      },
    },
  });
  if (!user) return new Error("User not found");
  if (user.role !== "customers") return new Error("User not found");
  return user;
};
