export async function fetchClients(searchParams) {
    const query = new URLSearchParams(searchParams).toString();

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/clients/search?${query}`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Failed to fetch clients');
    }

    return res.json();
};

export async function fetchNotifications() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/notifications`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Failed to fetch notifications');
    }

    return res.json();
};