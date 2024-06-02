import React from "react"
import EvaluationBoard from "./EvaluationBoard"

export default function ScreenDown() {
  const handleOnClick = () => {}

  const btnCallbackReference = () => {}
  const btnCallbackCondition = () => {}
  return (
    <div id="mainDown" align="center">
      <div>
        <div>
          <div id="div_Mushra" colSpan="2">
            <div id="mushra_items">
              <div>
                <div>
                  <div>Reference</div>
                  <div id="conditionNameScale"></div>
                  <div>Cond.1</div>
                  <div>Cond.2</div>
                  <div>Cond.3</div>
                  <div>Cond.4</div>
                </div>
                <div>
                  <div>
                    <button
                      data-theme="a"
                      id="buttonReference"
                      data-role="button"
                      className="audioControlElement ui-btn ui-btn-a ui-shadow ui-corner-all"
                      onclick={btnCallbackReference}
                      styles={{ margin: "0 auto" }}
                    >
                      Play
                    </button>
                  </div>
                  <div></div>
                  <div>
                    <button
                      data-role="button"
                      className="center audioControlElement ui-btn ui-shadow ui-corner-all"
                      onclick={btnCallbackCondition}
                      id="buttonConditions0"
                    >
                      Play
                    </button>
                  </div>
                  <div>
                    <button
                      data-role="button"
                      className="center audioControlElement ui-btn ui-shadow ui-corner-all"
                      onclick={btnCallbackCondition}
                      id="buttonConditions1"
                    >
                      Play
                    </button>
                  </div>
                  <div>
                    <button
                      data-role="button"
                      className="center audioControlElement ui-btn ui-shadow ui-corner-all"
                      onclick={btnCallbackCondition}
                      id="buttonConditions2"
                    >
                      Play
                    </button>
                  </div>
                  <div>
                    <button
                      data-role="button"
                      className="center audioControlElement ui-btn ui-shadow ui-corner-all"
                      onclick={btnCallbackCondition}
                      id="buttonConditions3"
                    >
                      Play
                    </button>
                  </div>
                </div>
                <EvaluationBoard />
              </div>
              {/* <canvas
                id="mushra_canvas"
                height="320"
                styles={{
                  position: 'absolute',
                  left: '6px',
                  top: '87.9844px',
                  zIndex: 0,
                }}
                width="680"
              ></canvas> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
