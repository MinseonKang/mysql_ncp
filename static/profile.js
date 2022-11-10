function profileEdit() {
  const form = document.forms["form_profile"];

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  axios({
    method: "POST",
    url: "/user/profile/edit",
    data: {
      id: form.id.value,
      userid: form.userid.value,
      pw: form.pw.value,
      name: form.name.value,
    },
  })
    .then((res) => {
      return res.data;
    })
    .then((data) => {
      // (1) alert 띄우기
      alert(data);
    });
}

function profileDelete() {
  const form = document.forms["form_profile"];

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  axios({
    method: "POST",
    url: "/user/profile/delete",
    data: {
      id: form.id.value,
    },
  })
    .then((res) => {
      return res.data;
    })
    .then((data) => {
      // (1) alert 띄우기
      alert(data);
      // (2) 회원 탈퇴시 profile 페이지에 머무를 이유가 없으므로 /user 경로로 이동
      // document.location.href란?
      // javascript에서 페이지 이동할 수 있는 방법
      // document 객체를 사용하기 때문에 프론트에서 사용 가능
      document.location.href = "/user";
    });
}
