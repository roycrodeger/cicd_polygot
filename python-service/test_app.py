import pytest
from app import app

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_get_data(client):
    """Test the /api/data endpoint."""
    response = client.get('/api/data')
    assert response.status_code == 200
    json_data = response.get_json()
    assert json_data['service'] == 'python-api'
    assert 'data' in json_data