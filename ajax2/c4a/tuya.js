const t = [
  `
{'api': <tuyapy.tuyaapi.TuyaApi object at 0xf70914a8>, 'data': {'online': True, 'state': False}, 'obj_id': 'bf68a88a10aae52852dozk', 'obj_type': 'switch', 'obj_name': 'svetla prac. stůl ', 'dev_type': 'switch', 'icon': 'https://images.tuyaeu.com/smart/icon/ay15422864509092y6k8/160371793060f7ad00bff.png'}
{'api': <tuyapy.tuyaapi.TuyaApi object at 0xf70914a8>, 'data': {'online': True, 'state': False}, 'obj_id': '01102174c4dd571e21d3', 'obj_type': 'switch', 'obj_name': 'C', 'dev_type': 'switch', 'icon': 'https://images.tuyaeu.com/smart/icon/ay1552533853981bvt9K/1585011499bc2a7bcae35.jpg'}
{'api': <tuyapy.tuyaapi.TuyaApi object at 0xf70914a8>, 'data': {'online': True, 'state': True}, 'obj_id': 'bf63ed02fc4f2548b4o1ff', 'obj_type': 'switch', 'obj_name': 'zásuvka prac. stul', 'dev_type': 'switch', 'icon': 'https://images.tuyaeu.com/smart/icon/ay15422864509092y6k8/160371793060f7ad00bff.png'}
{'api': <tuyapy.tuyaapi.TuyaApi object at 0xf70914a8>, 'data': {'online': True, 'state': False}, 'obj_id': 'bfdc1c6616db856bce8zp9', 'obj_type': 'switch', 'obj_name': 'zas. cer koupelna', 'dev_type': 'switch', 'icon': 'https://images.tuyaeu.com/smart/icon/ay1544451161651vQPZq/168546639692e205db931.png'}
{'api': <tuyapy.tuyaapi.TuyaApi object at 0xf70914a8>, 'data': {'online': False, 'state': Ture}, 'obj_id': 'bfeaa1e4378ee353b5euxp', 'obj_type': 'switch', 'obj_name': 'A', 'dev_type': 'switch', 'icon': 'https://images.tuyaeu.com/smart/solution/136001/b8bb0466b861046d_cover.png'}
{'api': <tuyapy.tuyaapi.TuyaApi object at 0xf70914a8>, 'data': {}, 'obj_id': 'coPAa1IuQosT8WVb', 'obj_type': 'scene', 'obj_name': 'cer sv vyp', 'dev_type': 'scene', 'icon': None}
{'api': <tuyapy.tuyaapi.TuyaApi object at 0xf70914a8>, 'data': {}, 'obj_id': 'cz1fpGNSwsaBWk4G', 'obj_type': 'scene', 'obj_name': 'cer svetlo', 'dev_type': 'scene', 'icon': None}
{'api': <tuyapy.tuyaapi.TuyaApi object at 0xf70914a8>, 'data': {}, 'obj_id': 'm44Rr86sAFwbi234', 'obj_type': 'scene', 'obj_name': 'If Plán:01 Každý den', 'dev_type': 'scene', 'icon': None}
{'api': <tuyapy.tuyaapi.TuyaApi object at 0xf70914a8>, 'data': {}, 'obj_id': 'aYGSdpqDlcKhWfTI', 'obj_type': 'scene', 'obj_name': 'Turn on all sockets', 'dev_type': 'scene', 'icon': None}
{'api': <tuyapy.tuyaapi.TuyaApi object at 0xf70914a8>, 'data': {}, 'obj_id': 'BwSSTVcU6DmQRtQf', 'obj_type': 'scene', 'obj_name': 'Zpoždění 29s', 'dev_type': 'scene', 'icon': None}
`,
  `
{'api': <tuyapy.tuyaapi.TuyaApi object at 0xf70914a8>, 'data': {'online': True, 'state': True}, 'obj_id': 'bf68a88a10aae52852dozk', 'obj_type': 'switch', 'obj_name': 'svetla prac. stůl ', 'dev_type': 'switch', 'icon': 'https://images.tuyaeu.com/smart/icon/ay15422864509092y6k8/160371793060f7ad00bff.png'}
{'api': <tuyapy.tuyaapi.TuyaApi object at 0xf70914a8>, 'data': {'online': True, 'state': False}, 'obj_id': '01102174c4dd571e21d3', 'obj_type': 'switch', 'obj_name': 'C', 'dev_type': 'switch', 'icon': 'https://images.tuyaeu.com/smart/icon/ay1552533853981bvt9K/1585011499bc2a7bcae35.jpg'}
{'api': <tuyapy.tuyaapi.TuyaApi object at 0xf70914a8>, 'data': {'online': True, 'state': True}, 'obj_id': 'bf63ed02fc4f2548b4o1ff', 'obj_type': 'switch', 'obj_name': 'zásuvka prac. stul', 'dev_type': 'switch', 'icon': 'https://images.tuyaeu.com/smart/icon/ay15422864509092y6k8/160371793060f7ad00bff.png'}
{'api': <tuyapy.tuyaapi.TuyaApi object at 0xf70914a8>, 'data': {'online': True, 'state': True}, 'obj_id': 'bfdc1c6616db856bce8zp9', 'obj_type': 'switch', 'obj_name': 'zas. cer koupelna', 'dev_type': 'switch', 'icon': 'https://images.tuyaeu.com/smart/icon/ay1544451161651vQPZq/168546639692e205db931.png'}
{'api': <tuyapy.tuyaapi.TuyaApi object at 0xf70914a8>, 'data': {'online': False, 'state': True}, 'obj_id': 'bfeaa1e4378ee353b5euxp', 'obj_type': 'switch', 'obj_name': 'A', 'dev_type': 'switch', 'icon': 'https://images.tuyaeu.com/smart/solution/136001/b8bb0466b861046d_cover.png'}
{'api': <tuyapy.tuyaapi.TuyaApi object at 0xf70914a8>, 'data': {}, 'obj_id': 'coPAa1IuQosT8WVb', 'obj_type': 'scene', 'obj_name': 'cer sv vyp', 'dev_type': 'scene', 'icon': None}
{'api': <tuyapy.tuyaapi.TuyaApi object at 0xf70914a8>, 'data': {}, 'obj_id': 'cz1fpGNSwsaBWk4G', 'obj_type': 'scene', 'obj_name': 'cer svetlo', 'dev_type': 'scene', 'icon': None}
{'api': <tuyapy.tuyaapi.TuyaApi object at 0xf70914a8>, 'data': {}, 'obj_id': 'm44Rr86sAFwbi234', 'obj_type': 'scene', 'obj_name': 'If Plán:01 Každý den', 'dev_type': 'scene', 'icon': None}
{'api': <tuyapy.tuyaapi.TuyaApi object at 0xf70914a8>, 'data': {}, 'obj_id': 'aYGSdpqDlcKhWfTI', 'obj_type': 'scene', 'obj_name': 'Turn on all sockets', 'dev_type': 'scene', 'icon': None}
{'api': <tuyapy.tuyaapi.TuyaApi object at 0xf70914a8>, 'data': {}, 'obj_id': 'BwSSTVcU6DmQRtQf', 'obj_type': 'scene', 'obj_name': 'Zpoždění 29s', 'dev_type': 'scene', 'icon': None}
`,
  `
{'api': <tuyapy.tuyaapi.TuyaApi object at 0xf70914a8>, 'data': {'online': True, 'state': True}, 'obj_id': 'bf68a88a10aae52852dozk', 'obj_type': 'switch', 'obj_name': 'svetla prac. stůl ', 'dev_type': 'switch', 'icon': 'https://images.tuyaeu.com/smart/icon/ay15422864509092y6k8/160371793060f7ad00bff.png'}
{'api': <tuyapy.tuyaapi.TuyaApi object at 0xf70914a8>, 'data': {'online': True, 'state': False}, 'obj_id': '01102174c4dd571e21d3', 'obj_type': 'switch', 'obj_name': 'C', 'dev_type': 'switch', 'icon': 'https://images.tuyaeu.com/smart/icon/ay1552533853981bvt9K/1585011499bc2a7bcae35.jpg'}
{'api': <tuyapy.tuyaapi.TuyaApi object at 0xf70914a8>, 'data': {'online': True, 'state': False}, 'obj_id': 'bf63ed02fc4f2548b4o1ff', 'obj_type': 'switch', 'obj_name': 'zásuvka prac. stul', 'dev_type': 'switch', 'icon': 'https://images.tuyaeu.com/smart/icon/ay15422864509092y6k8/160371793060f7ad00bff.png'}
{'api': <tuyapy.tuyaapi.TuyaApi object at 0xf70914a8>, 'data': {'online': True, 'state': True}, 'obj_id': 'bfdc1c6616db856bce8zp9', 'obj_type': 'switch', 'obj_name': 'zas. cer koupelna', 'dev_type': 'switch', 'icon': 'https://images.tuyaeu.com/smart/icon/ay1544451161651vQPZq/168546639692e205db931.png'}
{'api': <tuyapy.tuyaapi.TuyaApi object at 0xf70914a8>, 'data': {'online': False, 'state': false}, 'obj_id': 'bfeaa1e4378ee353b5euxp', 'obj_type': 'switch', 'obj_name': 'A', 'dev_type': 'switch', 'icon': 'https://images.tuyaeu.com/smart/solution/136001/b8bb0466b861046d_cover.png'}
{'api': <tuyapy.tuyaapi.TuyaApi object at 0xf70914a8>, 'data': {}, 'obj_id': 'coPAa1IuQosT8WVb', 'obj_type': 'scene', 'obj_name': 'cer sv vyp', 'dev_type': 'scene', 'icon': None}
{'api': <tuyapy.tuyaapi.TuyaApi object at 0xf70914a8>, 'data': {}, 'obj_id': 'cz1fpGNSwsaBWk4G', 'obj_type': 'scene', 'obj_name': 'cer svetlo', 'dev_type': 'scene', 'icon': None}
{'api': <tuyapy.tuyaapi.TuyaApi object at 0xf70914a8>, 'data': {}, 'obj_id': 'm44Rr86sAFwbi234', 'obj_type': 'scene', 'obj_name': 'If Plán:01 Každý den', 'dev_type': 'scene', 'icon': None}
{'api': <tuyapy.tuyaapi.TuyaApi object at 0xf70914a8>, 'data': {}, 'obj_id': 'aYGSdpqDlcKhWfTI', 'obj_type': 'scene', 'obj_name': 'Turn on all sockets', 'dev_type': 'scene', 'icon': None}
{'api': <tuyapy.tuyaapi.TuyaApi object at 0xf70914a8>, 'data': {}, 'obj_id': 'BwSSTVcU6DmQRtQf', 'obj_type': 'scene', 'obj_name': 'Zpoždění 29s', 'dev_type': 'scene', 'icon': None}
`
];

// Set the content type to JSON
const headers = new Headers();
headers.append('Content-Type', 'application/json');

// Get a random element from the array
const randomIndex = Math.floor(Math.random() * t.length);
const randomElement = t[randomIndex];

// Send the response
const response = new Response(randomElement, { headers });
response.send();

