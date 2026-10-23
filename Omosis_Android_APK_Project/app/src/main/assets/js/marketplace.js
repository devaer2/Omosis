function esc(v){return String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
function fallbackArt(p){ if(typeof svgImage==='function') return svgImage({name:p.name,category:p.category}); return ''; }
function dbProduct(row){return {id:row.id,name:row.name,seller:row.seller_profiles?.store_name||'Omosis seller',price:Number(row.price),mrp:Number(row.mrp),category:row.category,description:row.description||'',stock:Number(row.stock||0),image:row.image_url||fallbackArt(row),seller_id:row.seller_id,active:row.active}}
async function loadMarketplaceProducts(){
  if(!window.omosisSupabase) return PRODUCTS;
  const {data,error}=await omosisSupabase.from('products').select('*,seller_profiles(store_name)').eq('active',true).order('created_at',{ascending:false});
  if(error){console.warn('Using starter catalog:',error.message);return PRODUCTS}
  if(data?.length){PRODUCTS.splice(0,PRODUCTS.length,...data.map(dbProduct));document.dispatchEvent(new CustomEvent('omosis-products-loaded'));}
  return PRODUCTS;
}
document.addEventListener('DOMContentLoaded',loadMarketplaceProducts);
