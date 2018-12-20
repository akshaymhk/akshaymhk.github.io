function openDeepLink() {
    console.log("CHECKING TRUECALLER INSTALLED OR NOT");
    var wnd = window.open("truecallersdk://truesdk/web_verify?requestNonce=1234567890&partnerKey=vq25E27e4ed092bc646d3aefe1e3fc4810248&partnerName=AKMTC&lang=en&title=login");
    setTimeout(function () {
        if (wnd.location.href === 'about:blank') {
            // Truecaller app not present on the device and you redirect the user 
            // to your alternate verification page
            alert("TRUECALLER NOT INSTALLED");
            wnd.close();
        } else {
            // Truecaller app present on the device and the profile overlay opens
            // The user clicks on verify and you'll receive the user's access token to fetch the profile on 
            // your callback URL - post which, you can refresh the session at your frontend and complete the user verification
            alert("TRUECALLER INSTALLED");
        }
    }, 200)
}