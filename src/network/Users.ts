async function all() {
  const response = await fetch('http://localhost:5000/users');
  return response.json();
}

async function get(id: number) {
  const response = await fetch(`http://localhost:5000/user/${id}`);
  return response.json();
}

export {
  all,
  get,
}
