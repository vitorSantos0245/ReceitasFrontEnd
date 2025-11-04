const url = 'http://localhost:3000'

export async function getCategories() {
  const request = `${url}/categorias`;

  try {
    const response = await fetch(request, { method: 'GET' });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error('Erro ao buscar receitas:', e);
    return [];
  }
}

export async function createCategories(category) {
  const request = `${url}/categorias`

  try {
    const response = await fetch(request, {
      method: 'POST', headers: { 'content-type': 'application/json' },
      body: JSON.stringify(category)
    });
    const data = await response.json();
    return data.data;

  } catch (e) {
    console.error('Erro ao buscar receitas:', e);
    return [];
  }

}