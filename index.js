panel.plugin("skynettechnologies/allinoneaccessibility", {
    components: {
        'k-allinoneaccessibility-view': {
            template: `
                <k-panel-inside class="k-allinoneaccessibility-view">
                    <k-section>
                        <!-- Your HTML content here -->
                        <div id="domain_button" style="display: none">
                            <h5 style="color: #aa1111">It appears that you have already registered! Please click on the "Manage Subscription" button to renew your subscription.<br> Once your plan is renewed, please refresh the page.</h5>
                            <div style="text-align: left; width:100%; padding-bottom: 10px;"><a target="_blank" id="manage_subscription" class="aioa-cancel-button" href="">Manage Subscription</a></div>
                        </div>
                        <div id="setting-div" style="width:80%; margin-top: 50px; padding-bottom: 10px;justify-content:space-between; display: none">
                            <div style="padding-bottom: 8%;">
                                <div class="widget"> <h3 >Module Preferences:</h3></div>
                                <div class="subscription"><a target="_blank" class="aioa-cancel-button" id="aioa_subscriptionsd" href="">Manage Subscription</a></div>
                            </div>
                            <iframe id="setting-iframe" src="" height="1100px;" width="100%" style="border: none;display: none"></iframe>
                        </div>
                        <iframe id="aioa-iframe" src="" height="1100px;" width="80%" style="border: none;display: none"></iframe>
                    </k-section>
                </k-panel-inside>
            `,
            props: ["sharedLink"],
            mounted() {
                // Your JavaScript code here
                var current_domain = window.location.hostname;
                const myHeaders = new Headers();
                  myHeaders.append("Cookie", "XSRF-TOKEN=eyJpdiI6IlNkQWxSVTJ0V1RyRlBUVTVnV21JNlE9PSIsInZhbHVlIjoib0o1clU2MGpMVkpIMkNiLzBNeWJkSXhrUjFpMm1HTWp4R2lld1pYa2pWMGk3emFzck5XR1ZqUFRtdmt2QTVzdzAvK1dsNGl2ckJVYWkvUHE0S2svUExLWTlNS05nNmVYZVV1MUpnVEg1UHdscSttOFJpaGJkc3YwR0VuUmRlT00iLCJtYWMiOiIzYTNiZmI3ZmY3YjkyMDQ5M2UwN2NhNmQzNmE5NTNhYTM2YThkZjdiNWU0NjcwMzJkZjU4MTIzN2ZiN2NlMTFlIiwidGFnIjoiIn0%3D; all_in_one_accessibility_session=eyJpdiI6IjU1eWJpSm1nSFk5WlRubFhuNVRRa0E9PSIsInZhbHVlIjoiZDY1eStYLzhpK3BXLzduRFA3RGUvYVdCa0ZGSnJ1dVVCOHAzNkU0TmZJb2NJWDVHa0sxQ3RXdjdkZEVlTjc4bFF5d1VPY3RVWVRuSG5VekFrOC9PbWJ5NTVtWE5SOGJpVWNURXZIeHJNTE1uT0ZPZ1JDbXpYS3NHNU0zYkRsNFkiLCJtYWMiOiIzMzFhOTIwMGQwN2JiODBlMDkzYzlhOTRhNDg0NWRhYzMzYmMyOGI1N2JhMDAyYTRlZGMxOTYyNDZiYWI4NjlmIiwidGFnIjoiIn0%3D");

        const formdata = new FormData();
        formdata.append("domain", current_domain);
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: formdata,
          redirect: "follow"
        };
        fetch("https://ada.skynettechnologies.us/check-website", requestOptions)
          .then((response) => response.json())
          .then(function(response) {
              var get_settinglink = response.settinglink;
              var manage_domain = response.manage_domain;
              if(response.status == 3) {
                  var show_button = document.getElementById("manage_subscription");
                  document.getElementById("aioa-iframe").style.display = 'none';
                  document.getElementById("domain_button").style.display = 'block';
                  document.getElementById("setting-div").style.display = 'none';
                  show_button.href = get_settinglink;
              }
              else if(response.status > 0 && response.status < 3) {
                  var show_button_manage = document.getElementById("aioa_subscriptionsd");
                  var iframe = document.getElementById("setting-iframe");
                  document.getElementById("aioa-iframe").style.display = 'none';
                  document.getElementById("domain_button").style.display = 'none';
                  document.getElementById("setting-div").style.display = 'block';
                  document.getElementById("setting-iframe").style.display = 'block';
                  iframe.src = get_settinglink;
                  show_button_manage.href = manage_domain;
              }else{
              var iframe_id = document.getElementById("aioa-iframe");
                  document.getElementById("aioa-iframe").style.display = 'block';
                  document.getElementById("domain_button").style.display = 'none';
                  document.getElementById("setting-div").style.display = 'none';
                  iframe_id.src = "https://ada.skynettechnologies.us/trial-subscription?isframe=true&website=" + current_domain + "&developer_mode=true";
          }})
            .catch((error) => console.error(error));
            }
        },
    },
});
