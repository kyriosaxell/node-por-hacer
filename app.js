// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const color = require('colors');
let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let lista = porHacer.getListado();

        for (let tarea of lista) {
            console.log('=======Por hacer======'.green);
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log('======================\n'.green);
        }

        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);

        if (!actualizado) {
            console.log('No se pudo actualizar');
        }
        console.log('Se actualizó correctamente');
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);

        if (!borrado) {
            console.log('No se pudo eliminar');
        } else {
            console.log('Eliminado con éxito');
        }

        break;

    default:
        console.log('Comando no reconocido');
}