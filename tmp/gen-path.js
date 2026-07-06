const fs = require('fs');

const data = JSON.parse(fs.readFileSync('C:\\Users\\Santosh B\\Reactapps\\sgs-react_3-7\\tmp\\world-110m.json', 'utf8'));

const { scale, translate } = data.transform;
const arcs = data.arcs;
const geometries = data.objects.countries.geometries;

function decodeArc(arc) {
  const points = [];
  let x = 0, y = 0;
  for (const [dx, dy] of arc) {
    x += dx;
    y += dy;
    const lng = x * scale[0] + translate[0];
    const lat = y * scale[1] + translate[1];
    points.push([lng, lat]);
  }
  return points;
}

function getArcCoords(index) {
  const reversed = index < 0;
  const absIndex = reversed ? -index - 1 : index;
  const points = decodeArc(arcs[absIndex]);
  if (reversed) points.reverse();
  return points;
}

function getRingCoords(arcIndices) {
  let coords = [];
  for (const idx of arcIndices) {
    const pts = getArcCoords(idx);
    coords = coords.concat(pts);
  }
  return coords;
}

function project(lng, lat) {
  const x = (lng + 180) / 360 * 1000;
  const y = (90 - lat) / 180 * 500;
  return [x, y];
}

function ringToPath(ringCoords) {
  if (ringCoords.length === 0) return '';
  let path = '';
  let first = true;
  for (const [lng, lat] of ringCoords) {
    const [x, y] = project(lng, lat);
    if (first) {
      path += `M${x.toFixed(4)},${y.toFixed(4)}`;
      first = false;
    } else {
      path += `L${x.toFixed(4)},${y.toFixed(4)}`;
    }
  }
  path += 'Z';
  return path;
}

let totalPath = '';

for (const geom of geometries) {
  if (geom.type === 'Polygon') {
    for (const ring of geom.arcs) {
      totalPath += ringToPath(getRingCoords(ring));
    }
  } else if (geom.type === 'MultiPolygon') {
    for (const polygon of geom.arcs) {
      for (const ring of polygon) {
        totalPath += ringToPath(getRingCoords(ring));
      }
    }
  }
}

fs.writeFileSync('C:\\Users\\Santosh B\\Reactapps\\sgs-react_3-7\\tmp\\world-path.txt', totalPath, 'utf8');
console.log('Path length:', totalPath.length);
console.log('Done');
