"use client";
import { useState } from "react";
import Input from "../Inputs/Input/Input";
import Select from "../Inputs/Select/Select";
import { useUpdate } from "@/app/hooks/useUpdate";

function CreateAccount() {
    const [clientData, setClientData] = useState({
        name: "",
        birthday: "",
        type: "Checking"
    });
    const { handleUpdate, loading, error } = useUpdate();

    async function handleSubmit(e) {
        e.preventDefault();

        function generateRandom13DigitNumber() {
            const min = 1000000000000;
            const max = 9999999999999;
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        const randomNumber = generateRandom13DigitNumber();

        await handleUpdate({
            url: `/api/clients`,
            method: "POST",
            messageOnSuccess: "Client updated successfully!",
            data: {
                ...clientData,
                balance: 0,
                account: `${randomNumber}`
            }
        });
    };

    return (
        <div className="flex flex-direction--column gap-medium">
            <h2 className="title">Create Account</h2>
            <form
                className="flex flex-direction--column flex-align-items--flex-start gap-small"
                onSubmit={handleSubmit}
            >
                <Input
                    className=""
                    type="text"
                    name="name"
                    value={clientData.name}
                    onChange={(e) => setClientData({ ...clientData, name: e.target.value })}
                    label={"Name"}
                />
                <Input
                    className=""
                    type="text"
                    name="birthday"
                    label={"Birthday"}
                    value={clientData.birthday}
                    onChange={(e) => setClientData({ ...clientData, birthday: e.target.value })}
                    placeholder={"MM / DD / YYYY"}
                />
                <Select
                    className=""
                    name="type"
                    label={"Account Type"}
                    value={clientData.type}
                    onChange={(e) => setClientData({ ...clientData, type: e.target.value })}
                    options={[
                        { value: "Checking", label: "Checking" },
                        { value: "Savings", label: "Savings" },
                    ]}
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="primary-button padding-xs"
                >
                    Submit
                </button>
            </form>
            {error && <div><span className="material-symbols-outlined">warning</span> {error}</div>}
        </div>
    );
};

export default CreateAccount;