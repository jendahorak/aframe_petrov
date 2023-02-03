AFRAME.registerComponent('mover', {
  schema: {},

  init: function () {
    let el = this.el;
    this.animateMove = function () {
      let currPosition = el.getAttribute('position');
      let params = {
        property: 'position',
        to: {
          x: currPosition.x - 5,
          y: currPosition.y,
          z: currPosition.z,
        },
        dur: 5000,
        easing: 'easeInOutElastic',
      };

      el.setAttribute('animation', params);

      //   this.returnMove = function (e) {
      //     let p = e.detail.returnPoint;
      //     let params = {
      //       property: 'position',
      //       to: {
      //         x: p.x,
      //         y: p.y + 2,
      //         z: p.z,
      //       },
      //       dur: 5000,
      //       easing: 'easeInOutQuad',
      //     };

      //     el.setAttribute('animation', params);
      //   };
    };

    el.addEventListener('click', this.animateMove);
  },

  update: function () {
    // Do something when component's data is updated.
  },

  remove: function () {
    this.el.removeEventListener('click', this.animateMove);
    // Do something the component or its entity is detached.
  },

  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.
  },
});
