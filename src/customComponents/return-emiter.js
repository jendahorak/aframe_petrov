AFRAME.registerComponent('return-emitter', {
  schema: {},

  init: function () {
    let el = this.el;

    this.returnCall = function () {
      let p = el.getAttribute('position');
      el.emit('returnPetrov', { returnPoint: p });
    };
    this.el.addEvenetListener('click', this.returnCall);
  },

  update: function () {
    // Do something when component's data is updated.
  },

  remove: function () {
    this.el.removeEventListener('click', this.returnCall);
  },

  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.
  },
});
