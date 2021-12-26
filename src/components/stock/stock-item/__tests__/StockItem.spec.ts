import { mount, VueWrapper } from "@vue/test-utils";
import StockItem from "../StockItem.vue";
import Button from "@/components/common/button/Button.vue";
import SvgIcon from "@/components/common/svg-icon/SvgIcon.vue";
import { generateStocks } from "@/tests/mocks/mocks";
import { convertNumberToCurrency } from "@/lib/formatters/number.formatter";
import store from "@/store";
import { UNSUBSCRIBE_STOCK } from "@/store/modules/stocks/constants";

describe("StockItem.vue", () => {
  let wrapper: VueWrapper<any>;
  const stock = generateStocks(1)[0];

  beforeEach(() => {
    wrapper = mount(StockItem, {
      props: {
        stock,
      },
      global: {
        components: {
          SvgIcon,
          Button,
        },
      },
    });
  });

  it("should render stock properties", () => {
    const values = wrapper.findAll(".stock-item-value");

    expect(values[0].text()).toEqual(stock.isin);
    expect(values[1].text()).toEqual(convertNumberToCurrency(stock.price));
    expect(values[2].text()).toEqual(convertNumberToCurrency(stock.bid));
    expect(values[3].text()).toEqual(convertNumberToCurrency(stock.ask));
  });

  it("should call delete when delete clicked", async () => {
    const dispatchMock = jest
      .spyOn(store, "dispatch")
      .mockImplementation(() => Promise.resolve());
    const button = wrapper.find("Button");
    await button.trigger("click");

    expect(wrapper.emitted()).toHaveProperty("click");
    expect(dispatchMock).toHaveBeenCalledWith(UNSUBSCRIBE_STOCK, stock.isin);
  });
});
