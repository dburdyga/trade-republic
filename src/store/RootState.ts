import { StockModule } from "@/store/modules/stocks";
import { UiModule } from "@/store/modules/ui";

export interface RootState {
  stocks: StockModule;
  ui: UiModule;
}
