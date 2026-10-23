function escapeHtml(v=''){return String(v).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function statusClass(status){return 'badge status-'+String(status||'pending').toLowerCase()}
async function getMyOrders(){
  const user=await currentUser(); if(!user) return {user:null,orders:[]};
  const {data,error}=await omosisSupabase.from('orders').select('*,order_items(*)').eq('user_id',user.id).order('created_at',{ascending:false});
  if(error) throw error; return {user,orders:data||[]};
}
