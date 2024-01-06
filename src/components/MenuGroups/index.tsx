'use client';
import React, { useState, useEffect, useContext } from 'react';
import styles from './styles.module.scss';
import BuyForDay from '@/components/BuyForDay';
import Starters from '@/components/Starters';
import Dinner from '@/components/Dinner';
import { IngredientsContext } from '@/context/IngredientsContext';

export default function Temp(props: any) {
    const [ingredients, setIngredients] = useState<any[]>([]);
    const [label, setLabel] = useState<any[]>([]);
    const [image, setImage] = useState<any[]>([]);
    const [numberHuman, setNumberHuman] = useState<any[]>([]);
    const [openMenu, setOpenMenu] = useState(false);
    const handleClick = () => {
        setOpenMenu((prevValue) => !prevValue);
    };
    const { ingredientHistory, setIngredientHistory } = useContext(IngredientsContext);
    useEffect(() => {
        props.setSelectionUser(ingredientHistory);
    }, [ingredientHistory, props]);

    return (
        <>
            <div className={styles.container_top}>
                <button type='button' className={styles.menuGroup} onClick={handleClick}>
                    {openMenu ? 'Возврат к меню' : 'Тип блюда'}
                </button>
                {openMenu && (
                    <div className={styles.container_popup}>
                        <Starters setIngredients={setIngredients} setLabel={setLabel} />
                        <Starters setIngredients={setIngredients} setLabel={setLabel} />
                        <Starters setIngredients={setIngredients} setLabel={setLabel} />
                        <Starters setIngredients={setIngredients} setLabel={setLabel} />
                        <Starters setIngredients={setIngredients} setLabel={setLabel} />
                    </div>
                )}
            </div>
            <BuyForDay ingredients={ingredients} label={label} image={image} numberHuman={numberHuman} isOpen={false} />
        </>
    );
}
