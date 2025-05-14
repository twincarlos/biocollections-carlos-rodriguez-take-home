"use client";
import { useState } from "react";
import Input from "../Inputs/Input/Input";
import { useUpdate } from "@/app/hooks/useUpdate";
import { usePopup } from "@/app/context/PopupContext";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function TransferBalance({ client }) {
    const [amount, setAmount] = useState(0);
    const { setPopupContent } = usePopup();
    const { handleUpdate, loading, error } = useUpdate();

    async function withdraw(e) {
        e.preventDefault();
        if (Number(amount) > client.balance) {
            setPopupContent(<ErrorMessage message={"Insufficient balance!"} />);
        } else {
            await handleUpdate({
                url: `/api/clients/${client._id}`,
                method: "PUT",
                messageOnSuccess: "Balance withdrawn successfully!",
                data: {
                    ...client, balance: client.balance - Number(amount)
                }
            });
            await handleUpdate({
                url: `/api/notifications`,
                method: "POST",
                data: { content: `Account #${client.account} has withdrawn $${amount}` }
            });
        };
    };

    async function deposit(e) {
        e.preventDefault();
        await handleUpdate({
            url: `/api/clients/${client._id}`,
            method: "PUT",
            messageOnSuccess: "Balance deposited successfully!",
            data: {
                ...client, balance: client.balance + Number(amount)
            }
        });
        await handleUpdate({
            url: `/api/notifications`,
            method: "POST",
            data: { content: `Account #${client.account} has deposited $${amount}` }
        });
    };

    return (
        <div className="transfer-balance flex flex-direction--column gap-medium">
            <h2 className="title">Transfer Balance</h2>
            <form className="flex flex-direction--column gap-medium">
                <Input
                    className=""
                    type="number"
                    name="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    label={"Amount"}
                />
                <div className="flex gap-small">
                    <button
                        className="secondary-button padding-xs flex gap-small"
                        disabled={loading}
                        onClick={withdraw}
                    >
                        <span className="material-symbols-outlined">remove</span>Withdraw
                    </button>
                    <button
                        className="secondary-button padding-xs flex gap-small"
                        disabled={loading}
                        onClick={deposit}
                    >
                        <span className="material-symbols-outlined">add</span>Deposit
                    </button>
                </div>
            </form>
            {error && <div><span className="material-symbols-outlined">warning</span> {error}</div>}
        </div>
    );
};

export default TransferBalance;