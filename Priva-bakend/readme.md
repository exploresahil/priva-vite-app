# how to run
```sh
docker up --build 
```
```gql
# types
type user {
 id
  first_name
  last_name
  mobile_number
email
role

}

# Query
get_all_user{
  ...user
}
get_station{
  id
  location
owner{
...user
}
}

# Mutation
admin_or_owner_login(
email:String,
password:String,

){
  ...user

}
login_customer(
mobile_number: String
){
...user
}

create_customer(
first_name:String,
last_name: String,
mobile_number: String,
email: String
){
  ....user
}
create_history(
history:{
charing_mod: String,
charing_value: String,
charing_from: String,
charing_to: String,
is_pay: boolean,
date_time: String,
charing_state:String, # full or stop
payment_method: String, # UPI for now
},
station:{
  location:string,
  owner: User_input
}
){

user: {User},
historyS:{
history:[{History}]
}
}
crate_owner(
station:{},
user:{User},
){
User

}
crate_admin(
user:{User}
){
User
}


```
