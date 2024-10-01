function callUsers() {
  fetch("https://jsonplaceholder.tqwqwypicode.com/users")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let userData = "";
      data.map((values) => {
        userData += `<tr>
            <td>${values.id}</td>
            <td>${values.name}</td>
            <td>${values.email}</td>
            <td>${values.phone}</td>
        </tr>`;
      });

      document.getElementById("userData").innerHTML = userData;
    })
    .catch(() => {
      alert("error to display data");
    });
}
