







"use client";

import { Sun, Moon } from "@gravity-ui/icons";

import { Switch, useTheme } from "@heroui/react";

const ThemingToggle = () => {

  const { theme, setTheme } = useTheme();

  return (

    <Switch
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Power"
    >

      {({ isSelected }) => (

        <Switch.Content>

          <Switch.Control
            className={`h-[31px] w-[51px] bg-orange-500 ${
              isSelected
                ? "bg-orange-600 shadow-[0_0_12px_rgba(249,115,22,0.5)]"
                : ""
            }`}
          >

            <Switch.Thumb
              className={`size-[27px] bg-white shadow-sm ${
                isSelected ? "ms-[22px] shadow-lg" : ""
              }`}
            >

              <Switch.Icon>

                {isSelected ? (
                  <Sun className="size-4 text-orange-600" />
                ) : (
                  <Moon className="size-4 text-orange-500" />
                )}

              </Switch.Icon>

            </Switch.Thumb>

          </Switch.Control>

        </Switch.Content>

      )}

    </Switch>

  );

};

export default ThemingToggle;