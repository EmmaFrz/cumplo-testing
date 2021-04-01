import { TOKEN } from './settings';

const Api = {
    getDayDolar: () => fetch(`https://api.sbif.cl/api-sbifv3/recursos_api/dolar?apikey=${TOKEN}&formato=json`, { method: 'get' }).then((res) => res.json()).catch((err) => {throw new Error(err)} ),
    getDateDolar: (start, end) => fetch(`https://api.sbif.cl/api-sbifv3/recursos_api/dolar/periodo/${start[0]}/${start[1]}/dias_i/${start[2]}/${end[0]}/${end[1]}/dias_f/${end[2]}?apikey=${TOKEN}&formato=json`, { method: 'get' }).then(res => res.json()).catch(res => {throw new Error(res)})
}

export default Api;