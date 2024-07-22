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

export async function insertProductsByLike()