const url = '/box_4f93272b1bd791caa49d'

export async function getTodo() {
  const response = await fetch(url)
  const result = await response.json()
  return result
}

export async function saveTodo(value) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ todo: value, name: '주히' }),
  })
  return response.ok
}

export async function deleteTodo(id) {
  const response = await fetch(`${url}/${id}`, {
    method: 'DELETE',
  })
  return response.ok
}

export async function updateTodo(id, value) {
  const response = await fetch(`${url}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      todo: value,
      name: '주히',
    }),
  })
  return response.ok
}
