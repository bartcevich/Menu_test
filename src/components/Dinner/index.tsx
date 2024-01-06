/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState, useEffect, useCallback } from 'react';
import styles from './styles.module.scss';
import MenuGroups from '@/components/MenuGroups';

const identifiers = ['label2', 'label3', 'label4', 'label5', 'label6', 'label7'] as const;
export default function Dinner() {
    const [printLabel, setPrintLabel] = useState<{ [key: string]: any }>({});
    const [selectionUser, setSelectionUser] = useState<{ [key: string]: any }>({});

    useEffect(() => {
        //localStorage.setItem('ingredientHistory', JSON.stringify([]));
        console.log('checkTasks=', localStorage.getItem('ingredientHistory'));
        const savedIngredientHistory: string | null = localStorage.getItem('ingredientHistory');
        if (savedIngredientHistory) {
            const parsedIngredientHistory = JSON.parse(savedIngredientHistory);
            setPrintLabel(parsedIngredientHistory);
        }
    }, []);

    const handleChange = useCallback(
        (identifier: (typeof identifiers)[number], value: any) => {
            const newSelectionUser = {
                ...printLabel,
                [identifier]: value,
            };
            console.log('selectionUser=', selectionUser);
            console.log('printLabel=', printLabel);
            console.log('newSelectionUser=', newSelectionUser);
            //setSelectionUser(newSelectionUser);
            localStorage.setItem('ingredientHistory', JSON.stringify(newSelectionUser));
        },
        [printLabel, selectionUser],
    );

    return (
        <>
            {identifiers.map((identifier) => (
                <div key={identifier} className={styles.container_text}>
                    <div>
                        <MenuGroups setSelectionUser={setSelectionUser} />
                        <button
                            value={selectionUser[identifier]}
                            onClick={() => handleChange(identifier, selectionUser)}
                        >
                            test
                        </button>
                    </div>
                    <div>
                        {printLabel[identifier] && (
                            <div key={identifier}>
                                <div>{Object.entries(selectionUser).join(',  ')}</div>
                                <div>{Object.entries(printLabel).join(',  ')}</div>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
}
