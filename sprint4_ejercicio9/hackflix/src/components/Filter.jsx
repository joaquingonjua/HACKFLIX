import React from "react";
import { Rate, ConfigProvider, theme } from "antd";

function Filter({ rates, setRates }) {
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];

  return (
    <>
      <div className="text-end p-3">
        <div className="text-warning fs-6 fw-semibold">
          <span className="opacity-75 mx-2">Movies rate:</span>
          <span>
            <ConfigProvider
              theme={{
                algorithm: theme.darkAlgorithm,
              }}
            >
              <Rate
                tooltips={desc}
                onChange={(event) => {
                  setRates(event * 2);
                  console.log(rates);
                }}
                defaultValue={rates}
              />
            </ConfigProvider>
          </span>
        </div>
      </div>
    </>
  );
}

export default Filter;
