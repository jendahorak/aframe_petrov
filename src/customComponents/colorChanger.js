AFRAME.registerComponent('color-toggle', {
  schema: {},

  init: function () {
    let el = this.el;

    this.toggleColor = () => {
      el.setAttribute('color', 'red');
    };
    this.el.addEventListener('click', this.toggleColor);
    // Do something when component first attached.
  },

  update: function () {
    // Do something when component's data is updated.
  },

  remove: function () {
    this.el.removeEventListener('click', this.toggleColor);
    // Do something the component or its entity is detached.
  },

  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.
  },
});

// series of lifecycle functions
