import query from "./connect.js";

export async function allProducts(){
    return (await query('SELECT * FROM products')).rows
}

export async function allTypes(){
    return (await query('SELECT * FROM types')).rows;
}

export async function filterProductsByType(type){
    return (await query(`SELECT * FROM (products inner join types on products.id_type = types.id_type) where name_type = '${type.toLowerCase()}'`)).rows;
}

export async function filterProductsByLike(param){
    const like = "%"+param+"%";
    return (await query(`SELECT * FROM products where name like '${like}' or description like '${like}'`)).rows;
}

export async function insertProducts(params){
    query(`INSERT INTO products (name, description, price, upload, id_type) values ('${params[0]}', '${params[1]}', ${params[2]}, '${params[3]}', '${params[4]}')`);
    return (await query("SELECT * FROM products")).rows;
}

export async function insertType(name){
    query(`INSERT INTO types(name_type) values ('${name}')`);
    return (await query('SELECT * FROM types')).rows;
}

export async function updateProducts(name, description, price, url, id){
    query(`UPDATE products SET name = '${name}, description = '${description}', price = '${price}', url = '${url}' where id_prod = '${id}'`)
    return (await query('SELECT * FROM products')).rows;
}

export async function deleteProducts(id){
    query(`DELETE FROM products where id_prod = '${id}'`);
    return (await query("SELECT * FROM products")).rows;
}

export async function deleteTypes(id){
    query(`DELETE FROM types where id_types = '${id}'`);
    return (await query("SELECT * FROM types")).rows;
}