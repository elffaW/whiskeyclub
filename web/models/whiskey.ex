defmodule Whiskeyclub.Whiskey do
  use Whiskeyclub.Web, :model

  schema "whiskeys" do
    field :name, :string
    field :type, :string
    field :proof, :integer
    field :wood, :string
    field :age, :string
    belongs_to :user, Whiskeyclub.User

    timestamps
  end

  @required_fields ~w(name type proof wood age)
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
