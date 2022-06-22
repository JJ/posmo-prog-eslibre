import Browser
import Html exposing (Html, Attribute, div, input, text)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput)

main = Browser.sandbox { init = init, update = update, view = view }

type alias Model =  { que : String  }

init : Model
init = { que = "" }
type Msg = Change String

update : Msg -> Model -> Model
update msg modelo =
  case msg of
    Change donde -> { modelo | que = donde }

view : Model -> Html Msg
view modelo =  div []
    [ input [ placeholder "Que", value modelo.que, onInput Change ] []
    , div [] [ text (if modelo.que == "Rock" then "en Samil" else "de qué") ]
    ]