const SUPABASE_URL = "https://hupemzioubescjzpvuum.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_Ec814JH4dF0RWi_tISeLrg_TNedc4Px";
const omosisSupabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

async function currentUser() {
  const { data } = await omosisSupabase.auth.getUser();
  return data.user || null;
}

async function requireUser() {
  const user = await currentUser();
  if (!user) {
    const next = encodeURIComponent(location.pathname.split('/').pop() || 'account.html');
    location.href = 'login.html?next=' + next;
    return null;
  }
  return user;
}

async function logoutOmosis() {
  await omosisSupabase.auth.signOut();
  location.href = 'login.html';
}


async function updateAuthNavigation() {
  const user = await currentUser();
  document.querySelectorAll('[data-auth-nav]').forEach(a => {
    a.textContent = user ? 'Account' : 'Login';
    a.href = user ? 'account.html' : 'login.html';
  });
  document.querySelectorAll('[data-auth-mobile]').forEach(a => {
    a.innerHTML = user ? '<span>●</span>Account' : '<span>●</span>Login';
    a.href = user ? 'account.html' : 'login.html';
  });
}
document.addEventListener('DOMContentLoaded', updateAuthNavigation);
