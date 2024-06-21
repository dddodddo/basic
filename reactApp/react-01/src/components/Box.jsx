import React from "react";

function Box({ num, name, image }) {
  // 구조분해
  // let num = props.num;
  // let name = props.name;
  // let image = props.image;
  // let { num, name, image } = props;
  console.log(num);

  // console.log(num);
  // let person = {
  //   name: "홍길동",
  //   age: 20,
  // };
  // let name = person.name;
  // let 변수명과 person이 갖고 있는 값이 같을 경우에만 생략 가능하다.
  // ex) name, age
  // let age = person.age;

  // let { name, age } = person;
  // console.log(`${name},${age}`); // 홍길동,20

  // let array = [1, 2, 3, 4];
  // let [a, b, ...rest] = array;
  // console.log(`${a},${b},${rest}`); // 1,2,3,4
  // console.log(`${rest}`); // 3,4

  // console.log(props);
  return (
    <div className="box">
      box{num}
      <p>{name}</p>
      <div className="photo">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default Box;
