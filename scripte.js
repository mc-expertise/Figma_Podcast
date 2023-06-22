$(document).ready(function () {
  $('.burger-nav').click(function () {
    $('i').toggleClass('fa-microphone');
    $('.navbar-side').toggleClass('show');
  });
  $('.content-two').waypoint(
    function () {
      $('.content-two').addClass('animate__animated animate__fadeInUp');
    },
    { offset: '80%' }
  );

  $('.top-content').waypoint(
    function () {
      $('.top-content').addClass('animate__animated animate__fadeInUp');
    },
    { offset: '100%' }
  );

  $('.teams-title').waypoint(
    function () {
      $('.teams-title').addClass('animate__animated animate__fadeInUp');
    },
    { offset: '100%' }
  );

  $('.persoa').waypoint(
    function () {
      $('.persoa').addClass('animate__animated animate__fadeInUp');
    },
    { offset: '100%' }
  );
  $('.persob').waypoint(
    function () {
      $('.persob').addClass('animate__animated animate__fadeInUp');
    },
    { offset: '100%' }
  );
  $('.persoc').waypoint(
    function () {
      $('.persoc').addClass('animate__animated animate__fadeInUp');
    },
    { offset: '100%' }
  );

  $('.about > div').waypoint(
    function () {
      $('.about > div').addClass('animate__animated animate__fadeInUp');
    },
    { offset: '100%' }
  );

  $('.numberone').waypoint(
    function () {
      var finalNumber = 814;
      $({ numberValue: 0 }).animate(
        { numberValue: finalNumber },
        {
          duration: 2000,
          easing: 'swing',
          step: function () {
            $('.numberone').text(Math.ceil(this.numberValue));
          },
        }
      );
    },
    { offset: '100%' }
  );

  $('.numbertwo').waypoint(
    function () {
      var finalNumber = 104;
      $({ numberValue: 0 }).animate(
        { numberValue: finalNumber },
        {
          duration: 2000,
          easing: 'swing',
          step: function () {
            $('.numbertwo').text(Math.ceil(this.numberValue));
          },
        }
      );
    },
    { offset: '100%' }
  );

  $('.numberthree').waypoint(
    function () {
      var finalNumber = 123;
      $({ numberValue: 0 }).animate(
        { numberValue: finalNumber },
        {
          duration: 2000,
          easing: 'swing',
          step: function () {
            $('.numberthree').text(Math.ceil(this.numberValue));
          },
        }
      );
    },
    { offset: '100%' }
  );

  $('.numberfour').waypoint(
    function () {
      var finalNumber = 123;
      $({ numberValue: 0 }).animate(
        { numberValue: finalNumber },
        {
          duration: 2000,
          easing: 'swing',
          step: function () {
            $('.numberfour').text(Math.ceil(this.numberValue));
          },
        }
      );
    },
    { offset: '100%' }
  );

  $('.subone').waypoint(
    function () {
      $('.subone').addClass('animate__animated animate__fadeInUp');
    },
    { offset: '100%' }
  );

  $('.subtwo').waypoint(
    function () {
      $('.subtwo').addClass('animate__animated animate__fadeInUp');
    },
    { offset: '100%' }
  );

  $('.maps').waypoint(
    function () {
      $('.maps').addClass('animate__animated animate__fadeInUp');
    },
    { offset: '100%' }
  );
});
