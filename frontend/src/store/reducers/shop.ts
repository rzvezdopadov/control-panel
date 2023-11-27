import { createAction, createReducer } from "@reduxjs/toolkit";
import { IShop } from "../../../../global/interfaces/ishop";

////////////////////////////////////////////////////////////////////////
export const SHOP = "SHOP";

export const shopAction = createAction<IShop>(SHOP);

export const initialStateShop: IShop = {
	1.1: false,
	1.2: false,
	1.3: false,
	1.4: false,
	2.1: false,
	2.2: false,
	2.3: false,
	2.4: false,
	3.1: false,
	3.2: false,
	3.3: false,
	3.4: false,
	3.5: false,
	4.1: false,
	4.2: false,
	4.3: false,
	4.4: false,
	5.1: false,
	5.2: false,
	5.3: false,
	5.4: false,
	6.1: false,
	6.2: false,
	6.3: false,
	6.4: false,
	7.1: false,
	7.2: false,
	7.3: false,
	7.4: false,
	8.1: false,
	8.2: false,
	8.3: false,
	8.4: false,
	8.5: false,
	9.1: false,
	9.2: false,
	9.3: false,
	9.4: false,
	9.5: false,
	10.1: false,
	10.2: false,
	10.3: false,
	10.4: false,
	22.1: false,
	22.2: false,
	22.3: false,
	23.1: false,
	23.2: false,
	23.3: false,
	24.1: false,
	24.2: false,
	24.3: false,
	25.1: false,
	25.2: false,
	25.3: false,
	26.1: false,
	26.2: false,
	27.1: false,
	27.2: false,
	27.3: false,
	28.1: false,
	28.2: false,
	28.3: false,
	29.1: false,
	29.2: false,
	29.3: false,
	30.1: false,
	30.2: false,
	30.3: false,
};

export const shopReducer = createReducer(initialStateShop, (builder) => {
	builder.addCase(shopAction, (state: IShop, action: any) => {
		const shop = { ...action.payload };

		return shop;
	});
});

////////////////////////////////////////////////////////////////////////
