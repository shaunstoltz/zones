Inject = Package['inject-initial'].Inject;

var assets = '/packages/zones/assets';
var HTML = [
  '<script src="'+assets+'/utils.js" type="text/javascript"></script>',
  '<script src="'+assets+'/before.js" type="text/javascript"></script>',
  '<script src="'+assets+'/zone.js" type="text/javascript"></script>',
  '<!--[if lt IE 10 ]> <script>Zone.disabled=true</script> <![endif]-->',
  '<script src="'+assets+'/tracer.js" type="text/javascript"></script>',
  '<script src="'+assets+'/after.js" type="text/javascript"></script>',
  '<script src="'+assets+'/reporters.js" type="text/javascript"></script>',
];

Zones = {
  html: HTML.join('\n'),
  enabled: true,
};

Zones.enable = function () {
  Zones.enabled = true;
};

Zones.disable = function () {
  Zones.enabled = false;
};

Inject.rawHead('zones', function () {
  return Zones.enabled ? Zones.html : '';
});
