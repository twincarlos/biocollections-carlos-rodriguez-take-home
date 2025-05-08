"use client";
import { useEffect, useState } from "react";
import Table from "../Table/Table";
import { fetchClients } from "@/app/utils/api";
import { useAuth } from "@/app/context/AuthContext";
import ClientActions from "../ClientActions/ClientActions";

function ClientDirectoryTableWrapper({ searchParams }) {
    const { user } = useAuth();
    const [clients, setClients] = useState([]);

    useEffect(() => {
        if (!user) return;
        (async () => {
            const data = await fetchClients(searchParams);
            setClients(data);
        })();
    }, [user, searchParams]);

    if (!user) return <p>Login to access the client directory.</p>;
    if (!clients.length) return <p>Loading clients...</p>;

    const clientData = clients.map((client) => (
        {
            ...client,
            birthday: <p style={{ textAlign: "center" }}>{client.birthday}</p>,
            type: <p style={{ textAlign: "center" }}>{client.type}</p>,
            balance: <p style={{ fontWeight: 700 }}>${parseFloat(client.balance).toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            })}</p>,
            actions: <ClientActions client={client} />,
        }
    ));
    const clientColumns = [
        { key: "name", component: <p style={{ textAlign: "left" }}>Name</p> },
        { key: "birthday", component: <p>Birthday</p> },
        { key: "type", component: <p>Type</p> },
        { key: "account", component: <p style={{ textAlign: "left" }}>Account</p> },
        { key: "balance", component: <p style={{ textAlign: "left" }}>Balance</p> },
        { key: "actions", component: <p>Actions</p> },
    ];
    return (
        <Table data={clientData} columns={clientColumns} />
    );
};

export default ClientDirectoryTableWrapper;