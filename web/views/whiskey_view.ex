defmodule Whiskeyclub.WhiskeyView do
  use Whiskeyclub.Web, :view

  def render("index.json", %{whiskeys: whiskeys}) do
    %{data: render_many(whiskeys, Whiskeyclub.WhiskeyView, "whiskey.json")}
  end

  def render("show.json", %{whiskey: whiskey}) do
    %{data: render_one(whiskey, Whiskeyclub.WhiskeyView, "whiskey.json")}
  end

  def render("whiskey.json", %{whiskey: whiskey}) do
    %{id: whiskey.id,
      name: whiskey.name,
      type: whiskey.type,
      proof: whiskey.proof,
      wood: whiskey.wood,
      age: whiskey.age,
      user_id: whiskey.user_id}
  end
end
