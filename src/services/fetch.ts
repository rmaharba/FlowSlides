export async function fetchGraphQL({
  query,
  token,
  uri,
}: {
  query: any;
  token: string;
  uri: string;
}) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({query}),
  };

  try {
    const response = await fetch(uri, options);
    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Fetch error: ', error);
    return error;
  }
}
