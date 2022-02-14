const db = require('./database');

db.connect(err => {
    if (err) {
        console.log(err);
    } else {
        console.log('Conectado correctamente');
    }

})


// 1. Insertar venta
// 2. Insertar Productos Vendidos
db.beginTransaction((err) => {
    if (err) {
        console.log(err);
    }
    let sql1 = 'INSERT into venta (TOTAL, IVA) VALUES (218.00,7.2)';

    db.query(sql1, (err, result) => {
        if (err) {

            db.rollback((err) => {
                console.log(err);
            });
        }

        let sql2 = 'INSERT into productoventa (ID,IdVenta, IdProducto,CantidadVendida, Subtotal,PrecioVenta) VALUES (1,1,1,25,1000.00,1072.00)';

        db.query(sql2, (err, result) => {
            if (err) {
                db.rollback((err) => {
                    console.log(err);
                });
            }

            console.log(result);
            db.commit((err) => {
                if (err) {
                    db.rollback(() => console.log(err));
                }
                console.log('Transaccion Exitosa');
                db.end();
            });
        });
    });
});