defmodule Whiskeyclub.Survey do
  use Whiskeyclub.Web, :model

  schema "surveys" do
    field :appearance, :string
    field :appearance_rating, :integer
    field :aroma, :string
    field :aroma_rating, :integer
    field :taste, :string
    field :taste_rating, :integer
    field :recommend, :boolean, default: false
    field :rec_taste, :string
    field :bottle_design, :string
    field :design_rating, :integer
    field :tasting_date, Ecto.DateTime
    belongs_to :user, Whiskeyclub.User
    belongs_to :whiskey, Whiskeyclub.Whiskey

    timestamps
  end

  @required_fields ~w(appearance appearance_rating aroma aroma_rating taste taste_rating recommend rec_taste bottle_design design_rating tasting_date)
  @optional_fields ~w()

  @doc """
  Creates a changeset based on the `model` and `params`.

  If no params are provided, an invalid changeset is returned
  with no validation performed.
  """
  def changeset(model, params \\ :empty) do
    model
    |> cast(params, @required_fields, @optional_fields)
  end
end
