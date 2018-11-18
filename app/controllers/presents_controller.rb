class PresentsController < ApplicationController
  skip_before_action :verify_authenticity_token

  # get index 
  def index
    render json: Present.all
  end

  # get
  def show
    render json: Present.find(params["id"])
  end

  # create
  def create
    render json: Present.create(params["present"])
  end

  # delete
  def delete
    render json: Present.delete(params["id"])
  end

  # update
  def update
    render json: Present.update(params["id"], params["present"])
  end

end
