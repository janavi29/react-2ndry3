import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
export default function BasicExample() {
  return (
    <div className="Row1">
      <div className="Row2">
        <div className="Row3">
          <div className="Inside">
            <h3>Best Of Electronics</h3>
            <Button
              href="#"
              variant="primary"
              style={{
                padding: '10px',
                margin: '20px',
                borderradius: '2px',
                fontsize: '13px',
                boxshadow: '0px 2px 4px',
              }}
            >
              View All
            </Button>{' '}
          </div>
        </div>
        
      </div>
    </div>
  );
}
