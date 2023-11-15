import React from 'react';

type AddressType = {
  street: string;
  city: string;
};

type UserType = {
  id:number;
  name:string;
  age:number;
  address: AddressType

};

type UserListPropsType = {
    users: Array<UserType>; // UserType[]

};

export const UserList = (props: UserListPropsType) => {
  return (

    <div id={'hw01-users'}>
      <h2>User List:</h2>
      <ul>
          {props.users.map((objectfromArray) => (

               <li key={objectfromArray.id} id={`hw01-user-${objectfromArray.id}`}>
                  <strong>{objectfromArray.name}</strong> (Age: {objectfromArray.age})<strong> Address:</strong>
                  {objectfromArray.address.street}, {objectfromArray.address.city}
              </li>
              ))
      }
      </ul>
    </div>
  );
};
