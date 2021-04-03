async function products(req, res){
    const data = new Date();

    const produtos = await fetch("https://api.vigiadepreco.com.br/public/search/productswithfilters?hasimage=true&haslink=true&limit=200&offset=0&sortBy=relevance&descending=false&whitelist=vigiadepreco&breadcrumb=formulas%20especiais&find=formula%20infantil")
    const produtosresp = await produtos.json();
    const itemsprodutos = produtosresp.data;

    console.log(itemsprodutos);
    res.setHeader('Cache-Control', 's-maxage=50, stale-while-revalidate');

   res.json({
       listaitems: itemsprodutos.items
   })
   
}

export default products;