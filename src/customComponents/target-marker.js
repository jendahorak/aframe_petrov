AFRAME.registerComponent('target-marker', {
  schema: {},

  init: function () {
    const el = this.el; // reference to the entity this component is defined on

    this.addMarker = function (e) {
      let p = e.detail.intersection.point;
      let scene = document.querySelector('a-scene');

      let newMark = document.createElement('a-entity');
      newMark.setAttribute('geometry', {
        primitive: 'sphere',
      });
      newMark.setAttribute('material', 'color: red');
      newMark.setAttribute('scale', '.2 .2 .2');
      newMark.setAttribute('position', el.object3D.worldToLocal(p));

      el.appendChild(newMark);
    };

    el.addEventListener('click', this.addMarker);
    // Do something when component first attached.
  },

  update: function () {
    // Do something when component's data is updated.
  },

  remove: function () {
    this.el.removeEventListener('click', this.addMarker);
    // Do something the component or its entity is detached.
  },

  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.
  },
});
