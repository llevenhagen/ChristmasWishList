class PresentsController < ApplicationController
  skip_before_action :verify_authenticity_token

  # get index (all)
  def index
    render json: Present.all
  end

  # get one (by id)
  def show
    render json: Present.find(params["id"])
  end

  # create one
  def createOne
    render json: Present.create(params["present"])
  end

  # delete one (by id)
  def delete
    render json: Present.delete(params["id"])
  end

  # update one (by id)
  def update
    render json: Present.update(params["id"], params["present"])
  end

end
