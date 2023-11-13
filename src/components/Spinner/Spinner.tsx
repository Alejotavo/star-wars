import * as React from "react";

const Spinner = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="50"
        height="50"
        viewBox="0 0 50 50"
      >
        <path d="M 25 0 C 14.355 0 8 8.5293594 8 22.818359 L 8 27 C 8 36.012 6.6753594 40.615437 6.1933594 41.273438 C 5.9703594 41.577437 5.9374219 41.980406 6.1074219 42.316406 C 6.2774219 42.652406 6.623 42.863281 7 42.863281 L 10.251953 42.863281 L 10.251953 46.976562 C 10.251953 47.297563 10.406016 47.599109 10.666016 47.787109 C 10.926016 47.975109 11.261453 48.027734 11.564453 47.927734 L 17.195312 46.080078 L 19.914062 49.609375 C 20.088062 49.834375 20.350766 49.975094 20.634766 49.996094 C 20.920766 50.010094 21.197344 49.91675 21.402344 49.71875 L 24.908203 46.322266 L 28.416016 49.71875 C 28.602016 49.90075 28.852328 50 29.111328 50 C 29.136328 50 29.159594 49.999094 29.183594 49.996094 C 29.467594 49.975094 29.728344 49.835375 29.902344 49.609375 L 32.623047 46.078125 L 38.253906 47.925781 C 38.556906 48.025781 38.892344 47.973156 39.152344 47.785156 C 39.412344 47.597156 39.564453 47.297562 39.564453 46.976562 L 39.564453 42.863281 L 42.818359 42.863281 C 43.194359 42.863281 43.537984 42.649453 43.708984 42.314453 C 43.878984 41.979453 43.845047 41.575484 43.623047 41.271484 C 43.189047 40.676484 42 36.189 42 27 L 42 23.908203 C 42 8.0432031 36.28 0 25 0 z M 25 2 C 33.722402 2 38.562141 7.3636377 39.71875 18.330078 C 38.236084 15.71938 36.232106 13.87237 34.3125 13.380859 L 34.3125 11.181641 C 34.3125 10.629641 33.8655 10.181641 33.3125 10.181641 C 31.9345 10.181641 30.887328 10.521078 30.111328 10.955078 L 30.111328 9.1367188 C 30.111328 8.8167188 29.958219 8.5141719 29.699219 8.3261719 C 29.441219 8.1391719 29.106734 8.0865469 28.802734 8.1855469 C 28.684734 8.2235469 26.414203 8.97425 24.908203 10.53125 C 23.401203 8.97425 21.133625 8.2235469 21.015625 8.1855469 C 20.713625 8.0885469 20.378141 8.1391719 20.119141 8.3261719 C 19.860141 8.5141719 19.707031 8.8167187 19.707031 9.1367188 L 19.707031 10.611328 C 18.948031 10.373328 17.902859 10.181641 16.505859 10.181641 C 15.953859 10.181641 15.505859 10.629641 15.505859 11.181641 L 15.505859 13.380859 C 13.633389 13.861419 11.690044 15.639132 10.248047 18.203125 C 11.407798 7.840335 16.638217 2 25 2 z M 21.707031 10.658203 C 22.583031 11.120203 23.582531 11.811109 24.019531 12.662109 C 24.361531 13.329109 25.454828 13.329109 25.798828 12.662109 C 26.235828 11.811109 27.234328 11.119203 28.111328 10.658203 L 28.111328 13.226562 C 28.111328 13.682563 28.424234 14.0735 28.865234 14.1875 C 29.313234 14.3045 29.774141 14.095266 29.994141 13.697266 C 30.023141 13.645266 30.6265 12.588484 32.3125 12.271484 L 32.3125 14.25 C 32.3125 14.802 32.7595 15.25 33.3125 15.25 C 35.6615 15.25 40 20.096 40 27 L 40 28 C 40 28.021467 40.010387 28.039415 40.011719 28.060547 C 40.073669 34.177756 40.649648 38.554393 41.332031 40.865234 L 38.564453 40.865234 C 38.011453 40.865234 37.564453 41.313234 37.564453 41.865234 L 37.564453 43.837891 C 36.05977 41.486916 36 39.027236 36 39 L 36 37 C 36 33.325 34.511406 31.117734 31.316406 30.052734 C 30.786406 29.874734 30.227734 30.160594 30.052734 30.683594 C 29.877734 31.207594 30.160594 31.774219 30.683594 31.949219 C 33.069594 32.744219 34 34.161 34 37 L 34 39.160156 C 34 39.212156 34.003719 39.2635 34.011719 39.3125 C 34.06374 40.17979 34.378339 42.676058 35.984375 45.080078 L 32.574219 43.960938 C 32.172219 43.830937 31.729703 43.964781 31.470703 44.300781 L 29.648438 46.664062 C 29.014064 44.23049 29 42.023516 29 41.998047 C 28.999 41.446047 28.552 41 28 41 L 27.998047 41 C 27.446047 41.001 27 41.448 27 42 C 27 42.096181 27.008916 43.829464 27.443359 45.996094 L 25.603516 44.214844 C 25.410516 44.026844 25.159203 43.931641 24.908203 43.931641 C 24.657203 43.931641 24.407891 44.024891 24.212891 44.212891 L 22.589844 45.787109 C 22.980129 43.72765 23 42.0928 23 42 C 23 41.448 22.552 41 22 41 C 21.448 41 21 41.448 21 42 C 21 42.025177 20.98381 44.327231 20.300781 46.835938 L 18.347656 44.298828 C 18.088656 43.962828 17.646141 43.825984 17.244141 43.958984 L 14.068359 45.001953 C 15.628777 42.622004 15.936826 40.169556 15.988281 39.3125 C 15.996281 39.2635 16 39.212156 16 39.160156 L 16 37 C 16 34.161 16.929406 32.743266 19.316406 31.947266 C 19.840406 31.772266 20.124219 31.207594 19.949219 30.683594 C 19.774219 30.160594 19.210594 29.873781 18.683594 30.050781 C 15.487594 31.116781 14 33.325 14 37 L 14 38.998047 C 13.999141 39.065038 13.937352 41.712636 12.251953 44.130859 L 12.251953 41.863281 C 12.251953 41.311281 11.803953 40.863281 11.251953 40.863281 L 8.5078125 40.863281 C 9.2099042 38.642187 9.9040552 34.409106 9.984375 28.167969 C 9.986572 28.140887 10 28.117494 10 28.089844 L 10 27 C 10 20.096 14.220813 15.25 16.507812 15.25 C 17.059812 15.25 17.507812 14.802 17.507812 14.25 L 17.507812 12.222656 C 19.325813 12.377656 20.009719 12.921875 20.011719 12.921875 C 20.299719 13.202875 20.727656 13.282953 21.097656 13.126953 C 21.467656 12.970953 21.707031 12.607078 21.707031 12.205078 L 21.707031 10.658203 z M 19.667969 19 C 13.000969 19 13 27 13 27 C 13 27 14.111969 25 19.667969 25 C 21.508969 25 23 23.657 23 22 C 23 20.343 21.508969 19 19.667969 19 z M 30.332031 19 C 28.491031 19 27 20.343 27 22 C 27 23.657 28.491031 25 30.332031 25 C 35.888031 25 37 27 37 27 C 37 27 36.999031 19 30.332031 19 z M 20 21 C 20.552 21 21 21.448 21 22 C 21 22.552 20.552 23 20 23 C 19.448 23 19 22.552 19 22 C 19 21.448 19.448 21 20 21 z M 30 21 C 30.552 21 31 21.448 31 22 C 31 22.552 30.552 23 30 23 C 29.448 23 29 22.552 29 22 C 29 21.448 29.448 21 30 21 z M 25 25 C 22.375 25 21 27.526391 21 28.400391 C 21 29.344391 21.744406 30.566344 23.816406 30.902344 C 24.165406 30.967344 24.552 31 25 31 C 25.447 31 25.835156 30.96725 26.160156 30.90625 C 28.256156 30.56625 29 29.344391 29 28.400391 C 29 27.526391 27.625 25 25 25 z M 25 27 C 26.174 27 26.827469 28.082594 26.980469 28.433594 C 26.903469 28.543594 26.604406 28.8095 25.816406 28.9375 C 25.364406 29.0225 24.660156 29.027594 24.160156 28.933594 C 23.389156 28.808594 23.093531 28.540547 23.019531 28.435547 C 23.169531 28.086547 23.824 27 25 27 z M 21 33 C 19.346 33 18 34.346 18 36 C 18 37.654 19.346 39 21 39 L 29 39 C 30.654 39 32 37.654 32 36 C 32 34.346 30.654 33 29 33 L 21 33 z M 21 35 L 22 37 L 21 37 C 20.670489 37 20.391325 36.828972 20.208984 36.582031 L 21 35 z M 23 35 L 27 35 L 27 36 L 23 36 L 23 35 z M 29 35 L 29.791016 36.582031 C 29.608866 36.828972 29.330109 37 29 37 L 28 37 L 29 35 z"></path>
      </svg>
      <label>Loading...</label>
    </div>
  );
};

export default Spinner;
