export const initDeezer = () => {
  window.dzAsyncInit = function() {
    window.DZ.init({
      appId: "400384",
      channelUrl: "http://localhost:3000/channel.html",
      player: {
        container: "player",
        width: 300,
        height: 300,
        format: "square",
        onload: function() {}
      }
    });
  };
  (function() {
    var e = document.createElement("script");
    e.src = "https://e-cdns-files.dzcdn.net/js/min/dz.js";
    e.async = true;
    document.getElementById("dz-root").appendChild(e);
    console.log(document.getElementById("dz-root"));
  })();
};

export const deezerLogin = () => {
  window.DZ.login(
    function(response) {
      if (response.authResponse) {
        console.log("Welcome!  Fetching your information.... ");
        window.DZ.api("/user/me", function(response) {
          console.log("Good to see you, " + response.name + ".");
          console.log(response);
          // setUser(response);
          localStorage.setItem("user", JSON.stringify(response));
        });
      } else {
        console.log("User cancelled login or did not fully authorize.");
      }
    },
    { perms: "basic_access,email,listening_history" }
  );
};

export const deezerLogout = () => {
  window.DZ.logout();
};

export const deezerLoginStatus = () => {
  console.log(window.DZ);
  // window.DZ.getLoginStatus(function(response) {
  //   if (response.authResponse) {
  //     console.log("User is logged in");
  //     // logged in and connected user, someone you know
  //   } else {
  //     // no user session available, someone you dont know
  //     console.log("User is NOT logged in");
  //   }
  // });
};
