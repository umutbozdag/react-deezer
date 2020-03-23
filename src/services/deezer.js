export const initDeezer = () => {
  window.dzAsyncInit = () => {
    window.DZ.init({
      appId: 400384,
      channelUrl: `http://localhost:3000/channel.html`,
      player: {
        container: "player",
        width: 200,
        height: 300,
        onload: function(response) {
          console.log("Player response:" + JSON.stringify(response));
        }
      }
    });
    window.DZ.ready(sdk_options => {
      console.log(sdk_options);
      window.DZ.getLoginStatus(response => {
        if (response.status === "connected") {
          window.DZ.api("/user/me", response => {
            if (response.error) {
              return;
            }
            console.log(response);
          });
        }
      });
    });
  };
  (function() {
    const e = document.createElement("script");
    e.src = "https://e-cdns-files.dzcdn.net/js/min/dz.js";
    e.async = true;
    document.getElementById("dz-root").appendChild(e);
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
};

export const getUser = () => {
  const user = localStorage.getItem("user");
  return JSON.parse(user);
};
