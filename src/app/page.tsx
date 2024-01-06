//'use client';
import AllIngredients from '@/components/AllIngredients';
import Dinner from '@/components/Dinner';
import MenuGroups from '@/components/MenuGroups';
import MenuGroupsOpen from '@/components/MenuGroupsOpen';
import { MenuProvider } from '@/context/IngredientsContext';
import Container from '@/components/Conteiner';

export default function Home() {
    return (
        <MenuProvider>
            {/* <MenuStorage /> */}
            {/* <AllIngredients /> */}
            {/* <MenuGroupsOpen /> */}
            {/* <MenuGroups /> */}
            <Dinner />
            {/* <Container /> */}
        </MenuProvider>
    );
}