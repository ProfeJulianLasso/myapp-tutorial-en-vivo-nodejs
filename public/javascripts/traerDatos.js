const btnConsultar = document.getElementById("btnConsultar");

const traerDatos = () => {
  fetch("http://localhost:3000/api/v1/datos")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const name = document.querySelector("#name");
      const lastName = document.querySelector("#lastName");
      const age = document.querySelector("#age");
      const email = document.querySelector("#email");
      const phone = document.querySelector("#phone");
      const address = document.querySelector("#address");
      const city = document.querySelector("#city");

      name.textContent = data.name;
      lastName.textContent = data.lastName;
      age.textContent = data.age;
      email.textContent = data.email;
      phone.textContent = data.phone;
      address.textContent = data.address;
      city.textContent = data.city;
    });
};

btnConsultar.addEventListener("click", traerDatos);
